const ListItem = ({ index, filename, title, onClick }) => {
  return (
    <button className='list-item' onClick={() => onClick(filename)}>
      <div className='list-index'>{index + 1}.</div>
      <div className='list-title'>
        {title || filename.replace(/^.*[\\/]/, '')}
      </div>
    </button>
  );
};

export default ListItem;
