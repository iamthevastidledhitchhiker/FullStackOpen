const FilterNames = ({ filterName, handleFilterName }) => {
    return (
        <div>
            filter: <input
            value={filterName}
            onChange={handleFilterName}
        />
        </div>
    )
}

export default FilterNames;