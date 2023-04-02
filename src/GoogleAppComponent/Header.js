import MenuItem from './MenuItem'
import Avatar  from './Avatar';
import AppLauncher from './AppLauncher'
import "../style/styles.css"



function Header(){
    return (
        <div className='app-header'>
            <MenuItem name='Gmail'/>
            <MenuItem name='Images'/>
            <AppLauncher/>
            <Avatar/>
        </div>
        
    )
}

export default Header;