import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Todo({todo}) {
  return (
    <Card className='my-3 p-3 rounded'>
            <Card.Body>
                <Link to={`/todo/${todo._id}`}>
                    <Card.Title as='div'>
                        <strong>{todo.name}</strong>
                    </Card.Title> 
                </Link>
                <Card.Text as ='h3'>
                    {todo.price}
                </Card.Text>

            </Card.Body>
    </Card>
  )
}

export default Todo