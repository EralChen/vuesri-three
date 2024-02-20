// Hook `useData()` to make `pageContext.data` available from any Vue component.
// See
// * https://vike.dev/data
// * https://vike.dev/pageContext-anywhere
export { useData }
import { ComputedRef, computed } from 'vue'
import { usePageContext } from 'vike-vue/usePageContext'
function useData<T> () {
  const data = computed(() => usePageContext().data)
  return data as ComputedRef<T>
}
