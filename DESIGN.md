# DESIGN.md - Unbirthday

> このファイルは、AIエージェントや実装者が Unbirthday のUIを一貫して生成するためのデザイン仕様書です。
> 白と黒を基調に、明朝体の静けさ、余白、紙面のような読み心地を中心に設計します。

---

## 1. Visual Theme & Atmosphere

- **デザイン方針**: 余白を大きく取り、装飾を抑えた白黒基調の編集的なUI。明朝体の繊細さを活かし、落ち着いた緊張感と品位を持たせる。
- **密度**: 低〜中密度。情報を詰め込まず、見出し・本文・操作要素の間に明確な呼吸をつくる。
- **キーワード**: 静謐、端正、余白、文学的、モノクローム。
- **避ける印象**: ポップ、カラフル、過度な角丸、強いグラデーション、装飾的な影。

---

## 2. Color Palette & Roles

### Primary（ブランドカラー）

- **Primary** (`#111111`): 主要CTA、主要リンク、強調線に使用する黒。
- **Primary Hover** (`#000000`): ホバー・プレス時の黒。
- **Primary Inverse** (`#FFFFFF`): 黒背景上の文字・アイコン。

### Semantic（意味的な色）

モノクロームの世界観を壊さないため、意味色は最小限にとどめる。必要な場合のみ、彩度を抑えた色を補助的に使用する。

- **Danger** (`#8A1F1F`): エラー、削除、危険な操作。
- **Warning** (`#7A5A00`): 警告、注意喚起。
- **Success** (`#2F5D3A`): 成功、完了。

### Neutral（ニュートラル）

- **Text Primary** (`#111111`): 本文、見出し、主要ラベル。
- **Text Secondary** (`#555555`): 補足テキスト、説明、メタ情報。
- **Text Muted** (`#777777`): 日付、注釈、非アクティブな情報。
- **Text Disabled** (`#A8A8A8`): 無効状態のテキスト。
- **Border Strong** (`#111111`): 重要な区切り線、フォーカス、選択状態。
- **Border** (`#D8D8D8`): 入力欄、カード、静かな区切り線。
- **Border Subtle** (`#EEEEEE`): 補助的な区切り線。
- **Background** (`#FFFFFF`): ページ背景。
- **Surface** (`#FAFAFA`): 入力欄、淡い面。
- **Surface Inverse** (`#111111`): 反転面、主要ボタン。

---

## 3. Typography Rules

### 3.1 和文フォント

- **主フォント（明朝体）**: `"Noto Serif JP"`, `"Yu Mincho"`, `"YuMincho"`, `"Hiragino Mincho ProN"`, `"HGS明朝E"`, serif
- **補助フォント（ゴシック体）**: `"Noto Sans JP"`, `"Yu Gothic"`, `"Hiragino Kaku Gothic ProN"`, sans-serif

明朝体を本文・見出しの標準とする。ゴシック体は小さなUIラベル、フォーム内の短い補足、コード的な補助情報など、可読性を優先する箇所に限定する。

### 3.2 欧文フォント

- **主フォント（セリフ）**: Georgia, `"Times New Roman"`, serif
- **補助フォント（サンセリフ）**: Helvetica, Arial, sans-serif
- **等幅**: `"SFMono-Regular"`, Consolas, Menlo, monospace

### 3.3 font-family 指定

```css
/* 本文・見出し */
font-family:
  "Noto Serif JP",
  "Yu Mincho",
  "YuMincho",
  "Hiragino Mincho ProN",
  Georgia,
  serif;

/* UI補助テキスト */
font-family:
  "Noto Sans JP",
  "Yu Gothic",
  "Hiragino Kaku Gothic ProN",
  Helvetica,
  Arial,
  sans-serif;

/* 等幅 */
font-family:
  "SFMono-Regular",
  Consolas,
  Menlo,
  monospace;
```

**フォールバックの考え方**:
- 日本語の明朝体を最優先し、OS差による崩れを避ける。
- 欧文は和文明朝と調和するセリフ体を基本にする。
- UIラベルや小さな文字は、必要に応じてゴシック体へ切り替える。
- 最後に必ず generic family（serif / sans-serif / monospace）を指定する。

### 3.4 文字サイズ・ウェイト階層

| Role | Font | Size | Weight | Line Height | Letter Spacing | 備考 |
|------|------|------|--------|-------------|----------------|------|
| Display | 明朝体 | 64px | 500 | 1.05 | 0.02em | トップタイトル、印象的な見出し |
| Heading 1 | 明朝体 | 44px | 500 | 1.18 | 0.02em | ページ見出し |
| Heading 2 | 明朝体 | 32px | 500 | 1.28 | 0.02em | セクション見出し |
| Heading 3 | 明朝体 | 22px | 500 | 1.4 | 0.02em | 小見出し |
| Body | 明朝体 | 16px | 400 | 1.9 | 0.03em | 本文 |
| Body Large | 明朝体 | 18px | 400 | 1.9 | 0.03em | 導入文、リード文 |
| Caption | ゴシック体 | 13px | 400 | 1.6 | 0.04em | 補足、注釈 |
| Small | ゴシック体 | 12px | 400 | 1.5 | 0.04em | 最小テキスト |
| Button | ゴシック体 | 14px | 600 | 1 | 0.06em | 操作要素 |

### 3.5 行間・字間

- **本文の行間 (line-height)**: `1.8`〜`2.0`
- **見出しの行間**: `1.05`〜`1.4`
- **本文の字間 (letter-spacing)**: `0.02em`〜`0.04em`
- **ボタン・ラベルの字間**: `0.04em`〜`0.08em`

**ガイドライン**:
- 明朝体の本文は行間を広くし、紙面のような余白を保つ。
- 見出しは太くしすぎず、ウェイトよりサイズと余白で階層をつくる。
- 全文を太字にしない。強調は太字よりも余白、罫線、サイズ差で表現する。

### 3.6 禁則処理・改行ルール

```css
word-break: normal;
overflow-wrap: break-word;
line-break: strict;
```

**禁則対象**:
- 行頭禁止: `）」』】〕〉》、。，．・：；？！`
- 行末禁止: `（「『【〔〈《`

### 3.7 OpenType 機能

```css
font-feature-settings: "kern" 1;
font-kerning: normal;
```

- **kern**: 欧文混植時の文字間を整える。
- **palt**: 見出しやナビゲーションで詰めたい場合のみ使用する。長文本文には原則適用しない。

### 3.8 縦書き

縦書きは特別な演出や作品タイトルでのみ使用する。通常UIには使用しない。

```css
writing-mode: vertical-rl;
text-orientation: mixed;
```

---

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#111111`
- Text: `#FFFFFF`
- Border: 1px solid `#111111`
- Padding: `0 20px`
- Height: `44px`
- Border Radius: `2px`
- Font Size: `14px`
- Font Weight: `600`
- Letter Spacing: `0.06em`
- Hover: Background `#000000`

**Secondary**
- Background: `transparent`
- Text: `#111111`
- Border: 1px solid `#111111`
- Padding: `0 20px`
- Height: `44px`
- Border Radius: `2px`
- Hover: Background `#111111`, Text `#FFFFFF`

**Text Button**
- Background: `transparent`
- Text: `#111111`
- Border: none
- Padding: `0`
- Text Decoration: underline
- Underline Offset: `4px`

### Inputs

- Background: `#FFFFFF`
- Border: 1px solid `#D8D8D8`
- Border (hover): 1px solid `#777777`
- Border (focus): 1px solid `#111111`
- Border Radius: `2px`
- Padding: `10px 12px`
- Font Size: `16px`
- Height: `44px`
- Placeholder: `#777777`

### Cards

- Background: `#FFFFFF`
- Border: 1px solid `#D8D8D8`
- Border Radius: `2px`
- Padding: `24px`
- Shadow: `none`

カードは情報のまとまりを示す最小限の枠として扱う。浮遊感ではなく、紙面上の区画として見せる。

---

## 5. Layout Principles

### Spacing Scale

| Token | Value |
|-------|-------|
| XS | 4px |
| S | 8px |
| M | 16px |
| L | 24px |
| XL | 40px |
| XXL | 64px |
| XXXL | 96px |

### Container

- Max Width: `1120px`
- Reading Width: `680px`
- Padding (horizontal): `24px` desktop, `20px` mobile

### Grid

- Columns: 12 desktop, 6 tablet, 4 mobile
- Gutter: `24px` desktop, `16px` mobile

---

## 6. Depth & Elevation

白黒基調の静かなUIを保つため、影は原則使用しない。階層は余白、罫線、反転色、文字サイズで表現する。

| Level | Shadow | 用途 |
|-------|--------|------|
| 0 | none | 通常要素 |
| 1 | none | カード、入力欄、リスト |
| 2 | `0 8px 24px rgba(0,0,0,0.08)` | モーダルのみ |
| 3 | `0 16px 48px rgba(0,0,0,0.12)` | 重要なダイアログのみ |

---

## 7. Do's and Don'ts

### Do（推奨）

- 白、黒、グレーを中心に構成する。
- 明朝体を主役にし、余白で品位をつくる。
- 境界線は細く、色は必要以上に濃くしない。
- 角丸は `2px`〜`4px` に抑える。
- 本文は `line-height: 1.8` 以上を基本にする。
- CTAなど重要な操作のみ黒ベタを使う。

### Don't（禁止）

- グラデーション、派手なアクセントカラー、強いドロップシャドウを多用しない。
- すべてのテキストを純黒かつ太字にしない。
- カードを過剰に重ねない。
- 大きな角丸やポップなボタン形状を使わない。
- 明朝体の本文に狭い行間を使わない。
- 装飾目的だけの色面を増やさない。

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | 説明 |
|------|-------|------|
| Mobile | `<= 640px` | 1カラム。余白を保ちながら文字サイズを抑える |
| Tablet | `<= 960px` | 2〜6カラム。読み幅を優先 |
| Desktop | `> 960px` | 12カラム。本文幅は広げすぎない |

### タッチターゲット

- 最小サイズ: `44px x 44px`

### フォントサイズの調整

- モバイルの Display は `40px`〜`48px` 程度に縮小する。
- モバイル本文は `16px` を維持し、行間で読みやすさを確保する。
- 長文の読み幅は `36em`〜`42em` を目安にする。

---

## 9. Agent Prompt Guide

### クイックリファレンス

```txt
Primary Color: #111111
Text Color: #111111
Secondary Text: #555555
Background: #FFFFFF
Surface: #FAFAFA
Border: #D8D8D8
Font: "Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", Georgia, serif
UI Font: "Noto Sans JP", "Yu Gothic", "Hiragino Kaku Gothic ProN", Helvetica, Arial, sans-serif
Body Size: 16px
Line Height: 1.9
Border Radius: 2px
Shadow: 原則なし
```

### プロンプト例

```txt
Unbirthday のデザインシステムに従って、白と黒を基調にしたページを作成してください。
- 主フォントは明朝体の font-family を使用
- 背景は #FFFFFF、本文は #111111
- 主要CTAのみ #111111 の黒ベタにする
- 本文は 16px、line-height: 1.9
- 角丸は 2px、影は原則なし
- 階層表現は余白、罫線、文字サイズで行う
```
