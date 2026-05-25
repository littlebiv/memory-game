export function handleCategoryChange(e, setFormData) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
}
