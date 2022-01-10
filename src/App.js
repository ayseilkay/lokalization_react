import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import './App.css';
import {useState} from 'react';

const messages = {
  "tr-TR": {
    title:"Merhaba Dünya",
    description:"3 yeni mesajınız var"
    
  },
  "en-US":{
    title:"Hello World",
    description:"You have 3 new messages"
  }
}
function App() {

  const [lang,setLang] = useState("tr-TR")
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]} locale="fr" defaultLocale="en">
      <FormattedMessage
          id="title"
        />
        <br/>
        <FormattedMessage
          id="description"
        />
        <br/>
        <button onClick={()=>setLang('tr-TR')}>TR</button>
        <button onClick={()=>setLang('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
