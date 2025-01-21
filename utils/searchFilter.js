import { ref, computer, watch } from 'vue'

export function useSearchFilter(items) {
  const selectedFilter = ref('')
  const searchText = ref('')

  const filteredItems = computed(() => {
    let filtered = [...items.value]

    if (searchText.value) {
      filtered = filtered.filter(item => {
        return (
          item.namaLatin.toLowerCase().includes(searchText.value.toLowerCase())
        )
      })
    }
  })
}