import './Newcollection.css';
import new_collections from '../Assets/new_collections';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="collection-item" id={id}>
      <img src={image} alt={name} />
      <h2 id='namecatalog'>{name}</h2>
    </div>
  );
};

const NewCollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
          
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;