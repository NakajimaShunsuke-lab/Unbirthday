import { useState } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  TextArea,
  TextInput,
} from './components/ui/index.js';

export default function App() {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  return (
    <main className="app-shell">
      <section className="component-catalog" aria-labelledby="catalog-title">
        <div className="catalog-hero">
          <p className="ui-eyebrow">Component Catalog</p>
          <h1 id="catalog-title">Unbirthday UI</h1>
          <p className="catalog-intro">
            DESIGN.md の白と黒を基調にした静かなトーンから、基礎部品を
            React コンポーネントとして切り出したプレビューです。
          </p>
        </div>

        <div className="catalog-grid">
          <Card>
            <CardHeader
              eyebrow="Buttons"
              title="Actions"
              description="主操作、補助操作、テキスト操作の3種類。"
            />
            <CardBody>
              <Stack direction="horizontal" gap="s" align="center" className="catalog-actions">
                <Button>保存する</Button>
                <Button variant="secondary">下書き</Button>
                <Button variant="text">詳細を見る</Button>
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader
              eyebrow="Fields"
              title="Form Controls"
              description="ラベル、補足、エラー表示を含む入力部品。"
            />
            <CardBody>
              <Stack gap="m">
                <TextInput
                  id="name"
                  label="名前"
                  placeholder="例: Alice"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  hint="44px の入力高と明確なフォーカス表示を保ちます。"
                />
                <TextArea
                  id="note"
                  label="メモ"
                  placeholder="短い説明を入力"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                />
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader
              eyebrow="Feedback"
              title="Status Badges"
              description="意味色は必要最小限に抑えた状態表示。"
            />
            <CardBody>
              <Stack direction="horizontal" gap="s" align="center" className="catalog-actions">
                <Badge>Neutral</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="warning">Warning</Badge>
                <Badge tone="danger">Danger</Badge>
              </Stack>
            </CardBody>
          </Card>

          <Card>
            <CardHeader
              eyebrow="Card"
              title="Content Surface"
              description="影を使わず、細い境界線と余白でまとまりを作ります。"
            />
            <CardFooter>
              <Button variant="secondary">確認する</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
