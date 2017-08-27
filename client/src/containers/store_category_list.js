import { connect } from 'react-redux'
import CategoryList from '../components/category_list'
import {showCategory} from '../actions'

const getCategorys = (data) => {
    return data.map(({id, name}) => {id, name})
}

const mapStateToProps = state => {
    return {
        cates:  getCategorys(state.data)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCateClick: id => {
            dispatch(showCategory(id))
        }
    }
}

const StoreCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default StoreCategoryList
