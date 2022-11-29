import { getToken, removeToken } from '@vunk/skzz/shared/utils-auth'
import { getPlatform } from '@/utils'
import { useUserStore } from '@/stores/user'
import router from './router'
import { usePlatformStore } from '@/stores/platform'

const whiteList: (RegExp|string)[] = [/^\/login/] // no redirect whitelist


router.beforeEach(async (to, from, next) => {
  const platformStore = usePlatformStore()
  const userStore = useUserStore()

  const loginPath = '/login/' + getPlatform()
  const platform = to.params.platform as string

  await platformStore.setPlatformInfoByCode(platform)

  // determine whether the user has logged in
  const token = getToken()


  if (token) {
    if (to.path === loginPath) {

      // if is logged in, redirect to the home page
      next({ path: '/' })

    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const roles = userStore.getRoleIds()
      

      if (roles?.length) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          // const { roles } = await store.dispatch('user/getInfo')
          
          // TODO appId.value
          await userStore.setUserInfoByToken()

          // [TODO] if rUserInfo get roles.length ===  0

          // generate accessible routes map based on roles
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // dynamically add accessible routes
          // router.addRoutes(accessRoutes)


          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          // next({ ...to, replace: true })
          next()

        } catch (error) {
          // remove token and go to login page to re-login
          // await store.dispatch('user/resetToken')
          removeToken()
          next(loginPath)
        }
      }
    }
  } else {
    /* has no token*/
    if (
      whiteList.some(rule => 
        typeof rule === 'string' ? rule === to.path
          : rule.test(to.path),
      )
    ) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(loginPath)

      // NProgress.done()
    }
  }
})

