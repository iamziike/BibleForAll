import { useRef } from 'react';
import ScriptureViewLogic from './ScriptureViewLogic';

const ScriptureView = () => {
  const currentViewingPassageWrapper = useRef();

  const { passageToShow, handlePassageChange } = ScriptureViewLogic(
    currentViewingPassageWrapper,
  );

  return (
    <div className='scripture-view' onClick={handlePassageChange}>
      <div className='view-direction prev btn'>PREV</div>
      {passageToShow && (
        <div
          className='viewing-passage no-visible-scrollbar'
          ref={currentViewingPassageWrapper}
          dangerouslySetInnerHTML={{ __html: passageToShow.text }}
        ></div>
      )}
      <div className='view-direction next btn'>NEXT</div>
    </div>
  );
};

export default ScriptureView;
