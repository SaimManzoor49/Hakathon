import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ToastContainer } from 'react-toastify';
import  Routes  from './pages/Routes';
function App() {
  return (
<>

<Routes/>
<ToastContainer position="bottom-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light">

</ToastContainer>
      </>
  );
}

export default App;
