const React = require('react');
const fruits = require('../../models/fruits');
const DefaultLayout = require('../layout/Default')

function Edit(props) {
    const {fruit} = props
    return(
        <DefaultLayout title='Edit Fruit Page'>
            <form method="POST" action={`/fruits/${fruit._id}/?_method=PUT`}>
                Name:<br />
                <input type="text" name="name" defaultValue={fruit.name}/>
                <br />
                <br />
                Color:<br />
                <input type="text" name="color" defaultValue={fruit.color}/>
                <br />
                <br />
                Is Ready to Eat: {
                    fruit.readyToEat ? <input type="checkbox" defaultChecked/> 
                    : <input type="checkbox"/>
                }
                <br />
                <br />
                <input type="submit" value="Submit Changes"/>
            </form>

        </DefaultLayout>
    )
}

module.exports = Edit; 