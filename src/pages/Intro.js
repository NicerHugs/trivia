import React from 'react';
import { Link } from "react-router-dom";

import {
  INTRO_HEADLINE_TEXT,
  INTRO_BODY_TEXT,
  INTRO_CTA_TEXT,
} from '../constants/static-text.js';

const Intro = () => (
  <div className="intro page">
    <header>
      <h1>{INTRO_HEADLINE_TEXT}</h1>
    </header>
    {INTRO_BODY_TEXT.map((text, i) => (
      <div key={i}>
        {text}
      </div>
    ))}
    <Link className="btn" to="/quiz">{INTRO_CTA_TEXT}</Link>
  </div>
);

export default Intro;
