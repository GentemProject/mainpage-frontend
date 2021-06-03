// import Divider from '../../../usables/buttons/divider'

function SearchSelect(props: any) {
  return (
    <div className="SearchSelect">
      <div className="SearchSelect__title" style={{ paddingBottom: '12px' }}>
        <h4>{props.title}</h4>
      </div>
      {/* <Divider className="Divider" /> */}
      <div className="SearchSelect__info">
        <p>{props.info}</p>
      </div>
      <div className="SearchSelect__select">{props.children}</div>
    </div>
  );
}
export default SearchSelect;
