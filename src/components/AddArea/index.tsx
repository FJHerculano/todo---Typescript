import { useState, KeyboardEvent } from 'react'
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('')
        }
    }

  return (
    <C.Container>
        <div className="image">➕</div>
        <input 
            type="text"
            placeholder='Adione novas tarefas'
            value={inputText}
            onChange={e=> setInputText(e.target.value)} 
            onKeyUp={handleKeyUp}
        />
    </C.Container>
  )
}

export default AddArea