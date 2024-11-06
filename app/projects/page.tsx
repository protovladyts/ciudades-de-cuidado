// app/projects/page.js
import Link from 'next/link';
import { Template } from '../components';

export default function ProjectsPage() {
  const projects = [
    { title: 'Proyecto A', slug: 'proyecto-a' },
    { title: 'Proyecto B', slug: 'proyecto-b' },
  ];

  return (
    <Template>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </Template>
  );
}
