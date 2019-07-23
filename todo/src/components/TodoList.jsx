import React from 'react';

const TodoList = (props) => {
    console.log('props', props)
    return ( 
        <div>
            {props.todos.map(item => 
                <div 
                    key={item.id} 
                    onClick={() => props.toggleItem(item.id)}
                    className={ item.completed ? 'completed' : 'item'}
                    >
                    {item.task}
                    
                </div>
                )}
        </div>
     );
}
 
export default TodoList;