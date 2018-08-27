import React from 'react'
import { ParagraphsList } from "./ParagraphsList";

export const Banner = ({title, paragraphs}) => (
  <div className="banner">
    <h1>{title}</h1>
    <ParagraphsList paragraphs={paragraphs} />
  </div>
);
