import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import FormInput from './FormInput'
const TodoList = (props) => {
    console.log('props', props)
    var moment = require('moment');
    moment().format();
    return ( 
        <div >
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
            <FormInput addItem={props.addItem} clearCompleted={props.clearCompleted} />
        </div>
     );
}
 
export default TodoList;