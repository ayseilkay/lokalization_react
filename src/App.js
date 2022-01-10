import {IntlProvider, FormattedMessage} from 'react-intl'
import './App.css';
import {useState,useEffect} from 'react';

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
  const isLocale= localStorage.getItem("locale")

  const defaultLocale = isLocale ? isLocale : navigator.language;
  console.log(defaultLocale)

  const [locale,setLocale] = useState(defaultLocale)

  useEffect(()=>{
    localStorage.setItem("locale",locale)
  },[locale])
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]} locale="fr" defaultLocale="en">
      <FormattedMessage
          id="title"
        />
        <br/>
        <FormattedMessage
          id="description"
        />
        <br/>
        <button onClick={()=>setLocale('tr-TR')}>TR</button>
        <button onClick={()=>setLocale('en-US')}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
