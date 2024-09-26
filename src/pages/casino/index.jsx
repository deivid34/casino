import {Container, Form,Image,Imagegroup,Imageset} from './styles'
import {Appbar} from '../../components/Appbar'
import niquel from '../../assets/caça-niquel.webp';
import campo from '../../assets/campo-minado.webp';
import {Button} from '../../components/Button'
import {Footer} from '../../components/Footer'


export const Casino = ()=>{
    const casino = [
        {
          name: 'niquel',
          image: niquel,
          link: 'https://github.com/deivid34/calculadora',
        },
        {
          name: 'campo',
          image: campo,
          link: 'https://github.com/deivid34/job-finder',
        },
       
      ]
    return(<Container><Appbar/>
    <Form>     
             
        <Imagegroup>
          <Image src={niquel} alt="Tatuzinho" />
          <Button>jogar</Button>
           </Imagegroup>
          
           <Imageset>

          <Image src={campo} alt="Tatuzinho" />
          <Button>jogar</Button>

          </Imageset>


    </Form>
    <Footer />

    </Container>)
}