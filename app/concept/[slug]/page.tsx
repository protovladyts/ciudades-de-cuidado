"use client";
import { Template } from '@/app/components';
import { useRouter } from 'next/router';

export default function ConceptoArticle() {
  const router = useRouter();
  const { slug } = router.query;

  // Aquí podrías hacer una llamada a una API para obtener el contenido basado en el slug.
  const articleContent = `Contenido del artículo con el slug: ${slug}`;

  return (
    <Template>
      <h1>Artículo: {slug}</h1>
      <p>{articleContent}</p>
    </Template>
  );
}
