import Link from 'next/link';
import { ReactNode, useEffect, useState } from 'react';
import styles from '../../styles/atoms/CardIFrame.module.scss';
import Script from 'next/script'


type TProps = {
  codepenId: string;
}


const CardIFrame = ({ codepenId }: TProps) => {
  const [thisCodepenId, setThisCodepenId] = useState('')

  if (thisCodepenId !== codepenId) {
    setThisCodepenId(codepenId);
  }

  const embedUrl = `https://codepen.io/nd_yukisaito/embed/${thisCodepenId}?default-tab=html%2Cresult`;
  const codepenUrl = `https://codepen.io/nd_yukisaito/pen/${thisCodepenId}`;

  return(
    <>
      <iframe width="100%" height="600"  scrolling="no" title="codepen" src={embedUrl} frameBorder="no" loading="lazy">
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  )
};

export default CardIFrame;
