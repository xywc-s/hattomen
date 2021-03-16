import throttle from 'lodash-es/throttle';
import { UserModule } from '~/types';

export const install: UserModule = ({ app }) => {
  app.directive('nav-scroll', {
    beforeMount(el){
      addEventListener('scroll',throttle(()=>{
        const scroll_top = document.documentElement.scrollTop
        let classes = el.className.split(' ')
        if(scroll_top >= 15){
          classes.includes('bg-opacity-0') && classes.splice(classes.findIndex(item => item == 'bg-opacity-0'),1)
          classes.includes('bg-opacity-80') || classes.push('bg-opacity-80')
        }else{
          classes.includes('bg-opacity-80') && classes.splice(classes.findIndex(item => item == 'bg-opacity-80'),1)
          classes.includes('bg-opacity-0') || classes.push('bg-opacity-0')
        }
        const new_classes = classes.join(' ')
        el.className = new_classes
        },
        250,
        )
      )
    },
    beforeUnmount(el){
      removeEventListener('scroll',()=>{
        console.log('srcoll event removed');
        
      })
    }
  })

  app.directive('preview', {
    mounted(el, binding, vnode){
      el.addEventListener('mouseover',()=>{
        const _current =document.querySelector('.active-img .el-image__inner')
        _current.src = binding.value
      })
    },
    beforeUnmount(el){
      removeEventListener('mouseover',()=>{
        console.log('mouseover event removed');
      })
    }
  })
}
