import Select from 'react-select'

const SelectComponent = (props) => (
  <Select options={props.options} value={props.value} onChange={props.onChange}/>
)
export default SelectComponent;