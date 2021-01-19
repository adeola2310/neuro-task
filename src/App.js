import React, { useEffect, useState } from 'react';
import './assets/scss/App.scss';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';
import ItemCard from './components/itemCard/itemCard';
import Search from './components/search/Search';
import {data} from './store/store';
import noItem from './assets/images/noItem.svg'


function App() {


          const [items, setItems] = useState(data);
          const [name, setName] = useState('Burger');

          const [searchText, setSearchText] = useState('');
          const [searchedItems, setSearchItems] = useState([]);
           const [result, setShowResult] = useState(false);
           const [emptyState, setEmptyState] = useState(false);


           const itemData = searchText ? searchedItems  : items;

          useEffect(()=>{

            if(searchText){
              setShowResult(true);
          } else{
              setShowResult(false);
          }
          if(itemData?.length === 0){
            setEmptyState(true)
          }
          else {
            setEmptyState(false);
          }
          }, [searchText, itemData?.length]);


          const performSearch = ()=>{
            const searchedData = items.filter((ele)=>{
              let name = ele.name.toLowerCase()
              return name.includes(searchText.toLowerCase())
          });
          setSearchItems(searchedData);
          return searchedData
          }

          const handleChange = (e)=>{
            const searchTerm = e.target.value
            setSearchText(searchTerm);
            performSearch(searchTerm)
          }

          const addItemToList = ()=>{
            const newItem = items.concat({ name });
            setItems(newItem);
            setName('Burger');
          }

      


              return (
                <div>
                  <header className="header">
                    <Search
                    itemData={itemData}
                    searchText={searchText}
                    result={result}
                    handleChange={handleChange}
                    />
                    <Button
                    addItemToList={addItemToList}
                    />
                  </header>
                  <main>
                  
                       <div className="items-grid">
                       {
                         itemData.map((item)=>(
                           <ItemCard
                           name={item.name}
                           key={item.id}
                           />
                         ))
                       }
                     </div>
                 
                    {
                        emptyState && 
                       <div className="empty">
                         <img src={noItem} alt="no data"/>
                         <p>Item not found!</p>
                       </div>
                      }
                  </main>
                  <Footer/>
                </div>
              );
}

export default App;
