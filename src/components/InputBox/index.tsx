import React from 'react';
import './style.css';

//            interface: Input 상자 컴포넌트 Props          //
interface Props {
label: string;
type: 'text'|'password';
placeholder: string;
icon?: string;
errorMessage?: string;
onButtonClik?: () => void;
}

//           state: Properties         //
export default function InputBox(props: Props) {
  const{label, type, placeholder, icon, errorMessage} = props;
  const{onButtonClik} = props;

        //         render: Input 상자 렌더링           //
  return (
    <div className= 'inputbox'>
      <div className='inputbox-label'>{label}</div>
      <div className={errorMessage ? 'inputbox-container-error': 'inputbox-container'}>
       <input className='input'type={type} placeholder={placeholder}/>
       {onButtonClik! == undefined && ( 
       <div className='icon-button' onClick={onButtonClik}>
         {icon}
          <div className='right-arrow-icon'></div>
        </div>
      )}
      </div>
      <div className='inputbox-message'>{errorMessage}</div>
    </div>
  )
}

