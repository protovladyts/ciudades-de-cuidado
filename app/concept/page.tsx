// app/concepto/page.js
import Link from 'next/link';
import { Template } from '../components';

export default function ConceptoPage() {
  const articles = [
    { title: 'Artículo 1', slug: 'articulo-1' },
    { title: 'Artículo 2', slug: 'articulo-2' },
  ];

  return (
    <Template>
      <h1>Concepto</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/concepto/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </Template>
  );
}
