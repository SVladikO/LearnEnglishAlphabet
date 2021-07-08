import {useState} from 'react';

import {AppTag, Input} from './App.style';
import Button from "./component/button/button.component";
import {Header} from "./App.style";
import './App.css';
import ButtonList from "./component/button-list/button-list.component";

function App() {
    let [englishText, changeEnglishText] = useState("")

    function clearState() {
        changeEnglishText("");
    }

    return (
        <AppTag>
            <Header>
                <Input type="text" value={englishText} />
                <Button handleClick={clearState} title="X" minWidth={"18px"}/>
            </Header>
            <ButtonList englishText={englishText} changeEnglishText={changeEnglishText}/>
        </AppTag>
    );
}

export default App;
