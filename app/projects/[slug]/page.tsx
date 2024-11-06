// app/projects/[slug]/page.js
import { Template } from '@/app/components';
import { useRouter } from 'next/router';

export default function ProjectArticle() {
  const router = useRouter();
  const { slug } = router.query;

  // Llamada a API o lógica para obtener el contenido del proyecto basado en el slug.
  const projectContent = `Detalles del proyecto con el slug: ${slug}`;

  return (
    <Template>
      <h1>Project: {slug}</h1>
      <p>{projectContent}</p>
    </Template>
  );
}