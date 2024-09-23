import { components } from 'react-select'
import Tooltip from '../../../Tooltip/Tooltip'
import { ChildrenContent } from '../ChildrenContent/ChildrenContent'
import PropTypes from 'prop-types'

const Option = ({ Renderer, data, children, ...props }) => {
  const tooltipProps = data.tooltipProps || {}
  return (
    <Tooltip {...tooltipProps} position={Tooltip?.positions?.RIGHT}>
      {Renderer ? (
        <components.Option {...props} className='dropdown-wrapper__option--reset'>
          <Renderer {...data} />
        </components.Option>
      ) : (
        <components.Option {...props} className='dropdown-wrapper__option--reset'>
          <ChildrenContent data={data}>{children}</ChildrenContent>
        </components.Option>
      )}
    </Tooltip>
  )
}

Option.propTypes = {
  Renderer: PropTypes.func, // If Renderer is a function component
  data: PropTypes.shape({
    tooltipProps: PropTypes.object, // Define the structure of data.tooltipProps
  }).isRequired, // `data` is required
  children: PropTypes.node, // `children` can be any renderable content
};

export default Option
