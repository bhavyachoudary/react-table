import React, { useMemo } from 'react'
import { COLUMNS } from './headers'
import MOCK_DATA from './MOCK_DATA.json'
import { useTable } from 'react-table'


const Column = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    useTable({ columns, data })
    return (
        <div></div>
    )
}

export default Column