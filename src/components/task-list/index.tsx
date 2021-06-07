import React, { useEffect, useState } from 'react';
import TaskItem from '../task-item';
import { Container, Filter } from './styles';
import {
    FaSortAlphaDown,
    FaSortAlphaDownAlt,
    FaCheck,
    FaClock,
    FaCheckDouble,
    FaTasks,
    FaListUl,
} from 'react-icons/fa';
import Loader from '../loader';
import { useTask } from '../../hooks/task';

enum OrderByFilter {
    description_desc = 'DESCRIPTION_DESC',
    description_asc = 'DESCRIPTION_ASC',
    created_at = 'CREATED_AT',
    completed_at = 'COMPLETED_AT',
}

enum FilterByFilter {
    all = 'ALL',
    complete = 'COMPLETE',
    incomplete = 'INCOMPLETE',
}

const Tasklist: React.FC = () => {
    const { tasks, controlLoaderTaskList, FilterTask } = useTask();
    const [orderByFilter, setOrderByFilter] = useState<OrderByFilter>(OrderByFilter.description_asc);
    const [filterByFilter, setFilterByFilter] = useState<FilterByFilter>(FilterByFilter.all);

    const handleOrderBy = (event: any) => {
        setOrderByFilter(event.target.value);
        filterTasks(filterByFilter, event.target.value);
    }

    const handleFilterBy = (event: any) => {
        setFilterByFilter(event.target.value);
        filterTasks(event.target.value, orderByFilter);
    }

    const filterTasks = (filterBy: FilterByFilter, orderBy: OrderByFilter) => {
        FilterTask(filterBy, orderBy);
    }

    useEffect(() => {
        
    }, [tasks, controlLoaderTaskList]);

    return (
        <Container>
            <h2>Tasks</h2>

            {
                controlLoaderTaskList ? <Loader />
                :
                    <>
                        <Filter>
                            <div>
                                <strong>Order by:</strong>

                                <div className="options">
                                    <label htmlFor="description_asc">
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            id="description_asc"
                                            value={OrderByFilter.description_asc}
                                            checked={orderByFilter === OrderByFilter.description_asc}
                                            onChange={handleOrderBy}
                                        />
                                        Description
                                        <FaSortAlphaDown size={14} className="icon" />
                                    </label>

                                    <label htmlFor="description_desc">
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            id="description_desc"
                                            value={OrderByFilter.description_desc}
                                            checked={orderByFilter === OrderByFilter.description_desc}
                                            onChange={handleOrderBy}
                                        />
                                        Description
                                        <FaSortAlphaDownAlt size={14} className="icon" />
                                    </label>

                                    <label htmlFor="created_at">
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            id="created_at"
                                            value={OrderByFilter.created_at}
                                            checked={orderByFilter === OrderByFilter.created_at}
                                            onChange={handleOrderBy}
                                        />
                                        Create
                                        <FaClock size={14} className="icon" />
                                    </label>

                                    <label htmlFor="completed_at">
                                        <input
                                            type="radio"
                                            name="orderBy"
                                            id="completed_at"
                                            value={OrderByFilter.completed_at}
                                            checked={orderByFilter === OrderByFilter.completed_at}
                                            onChange={handleOrderBy}
                                        />
                                        Complete
                                        <FaCheck size={14} className="icon" />
                                    </label>
                                </div>
                            </div>
                            
                            <div>
                                <strong>Filter by:</strong>

                                <div className="options">
                                    <label htmlFor="all">
                                        <input
                                            type="radio"
                                            name="filterBy"
                                            id="all"
                                            value={FilterByFilter.all}
                                            checked={filterByFilter === FilterByFilter.all}
                                            onChange={handleFilterBy}
                                        />
                                        All
                                        <FaCheckDouble size={14} className="icon" />
                                    </label>

                                    <label htmlFor="complete">
                                        <input
                                            type="radio"
                                            name="filterBy"
                                            id="complete"
                                            value={FilterByFilter.complete}
                                            checked={filterByFilter === FilterByFilter.complete}
                                            onChange={handleFilterBy}
                                        />
                                        Complete
                                        <FaTasks size={14} className="icon" />
                                    </label>

                                    <label htmlFor="incomplete">
                                        <input
                                            type="radio"
                                            name="filterBy"
                                            id="incomplete"
                                            value={FilterByFilter.incomplete}
                                            checked={filterByFilter === FilterByFilter.incomplete}
                                            onChange={handleFilterBy}
                                        />
                                        Incomplete
                                        <FaListUl size={14} className="icon" />
                                    </label>
                                </div>
                            </div>
                        </Filter>

                        {
                            tasks.length ?
                            tasks.map((task, index) => (
                                <TaskItem task={task} lastTask={tasks.length === index + 1} />
                            ))
                            :
                            <div className="alert">No tasks found!</div>
                        }

                        {
                            tasks.length ?
                            <label htmlFor="hideCompleted">
                                Hide completed
                                <input type="checkbox" name="hideCompleted" id="hideCompleted" value="true" />
                            </label>
                            :
                            ''
                        }

                    </>
            }
        </Container>
    )
};

export default Tasklist;