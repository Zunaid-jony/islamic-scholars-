import React from 'react';
import { BsFacebook} from 'react-icons/bs';
import { AiOutlineTwitter} from 'react-icons/ai';
import { FcGoogle} from 'react-icons/fc';
import { BsGithub} from 'react-icons/bs';
import { AiFillHome} from 'react-icons/ai';
import { SiGmail} from 'react-icons/si';
import { BsFillTelephonePlusFill} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className='bg-dark text-white pt-5 pb-4'>

            <div className='container tect-center tet-md-left'>
                <div className='row tect-center tect-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='tet-uppercase mb-4 font-weight-bold text-warning '>
                            
                        <img style={{width:'70px',height:'50px'}} src="https://i.ibb.co/zFn7x1j/24766669-indonesian-halal-logo-2022.jpg" alt="24766669-indonesian-halal-logo-2022" border="0"/>
                             
                              </h5>
                        <p>Islamic University, Bangladesh, commonly referred to as Islamic University, Kushtia shortly IU, is one of the major public research and PhD granting universities in Bangladesh</p>

                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='tect-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>

                    </div>
                {/*  */}

                    <div className='col-md-3 col-lg-2 col-xl-2 mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful lins</h5>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Providers</a>
                        </p>
                        <p>
                            <a href='' className='text-white'style={{textDecoration: 'none'}}  >Help</a>
                        </p>

                    </div>

                    <div className='col-md-4 col-lg-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'> Contact</h5>
                        <p>
                            <i className='fas fa-home mr-3'><AiFillHome></AiFillHome> Dhaka kolabagan 1212</i>
                        </p>
                        
                        <p>
                            <i className='fas fa-home mr-3'> <SiGmail></SiGmail>  md.jony.soft@gmail.com</i>
                        </p>
                        <p>
                            <i className='fas fa-home mr-3'> <BsFillTelephonePlusFill></BsFillTelephonePlusFill> +088 01627392810</i>
                        </p>

                    </div>


                </div>

                <hr className='mb-4'/>
                <div className='row align-items-center'>
                    <div className='col-md-7 col-lg-8'>
                        <p>Copyright &copy; 2022 All rights buyonia </p>

                    </div>

                    <div className='col-md-5 col-lg-4'>
                        <div className='text-center text-right'>
                            <ul className='list-unstyled list-inline'>

                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white ' style={{fontSize:'23px'}}>
                                        <i className='fab fa-facebook'> <BsFacebook></BsFacebook></i>
                                    </a>

                                </li>
                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white ' style={{fontSize:'23px'}}>
                                        <i className='fab fa-facebook'> <AiOutlineTwitter></AiOutlineTwitter></i>
                                    </a>

                                </li>

                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white ' style={{fontSize:'23px'}}>
                                        <i className='fab fa-facebook'> <FcGoogle></FcGoogle></i>
                                    </a>

                                </li>

                                <li className='list-inline-item'>
                                    <a href='#' className='btn-floating btn-sm text-white ' style={{fontSize:'23px'}}>
                                        <i className='fab fa-facebook'> <BsGithub></BsGithub> </i>
                                    </a>

                                </li>

                                

                                
                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;