import React from 'react';
import { Card, Image } from 'semantic-ui-react'
const TodoList = (props) => {
    console.log('props', props)
    var moment = require('moment');
    moment().format();
    return ( 
        <div className="todos">
            
            {props.todos.map(item => 
                <div 
                    key={item.id} 
                    onClick={() => props.toggleItem(item.id)}
                    
                    >
                    {/* {item.task} */}
                    
                    <Card >
                        <Image size='medium' src='https://todo.to.it/assets/imgs/todo_social.png' />

                        <Card.Content>
                            <Card.Description as='a' className={ item.completed ? 'completed' : 'todo'}>{item.task}</Card.Description>
                            <Card.Meta>{moment().startOf('hour').fromNow()}</Card.Meta>
                        </Card.Content>
                    </Card>
                </div>
                )}
        </div>
     );
}
 
export default TodoList;