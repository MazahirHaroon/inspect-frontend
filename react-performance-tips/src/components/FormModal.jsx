const FormModal = () => {
  return (
    <div className='flex flex-col'>
      <MainHeading content={'Modal'} />
      <form className='flex flex-col max-w-sm'>
        <label> Name </label>
        <input className='border border-gray-400' />
        <label> Email </label>
        <input className='border border-gray-400' />
      </form>
    </div>
  );
};

export default FormModal;
