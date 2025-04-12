import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { celestialObjects } from '../data';
import NavigateBackButton from '../Components/NavigateBackButton';

export async function contentLoader({ params }) {
  const match = celestialObjects.find(obj => obj.id === params.id);
  if (!match) {
    throw new Response("Not Found", { status: 404 });
  }
  return match;
}

export default function ContentPage() {
  const content = useLoaderData();

  return (
    <div className="content-page">
      <h2>{content.title}</h2>
      <p>{content.content}</p>
      <NavigateBackButton/>
    </div>
  );
}
