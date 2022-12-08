import {useEffect, useRef, useState} from 'react'

export const useOutside = (initialIsVisible) => {
	const [show, setShow] = useState(initialIsVisible)
	const ref = useRef(null)
	
	const clickOutsideHandler = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setShow(false)
		}
	}
	
	useEffect(() => {
		document.addEventListener("click", clickOutsideHandler)
		return () => {
			document.removeEventListener("click", clickOutsideHandler)
		}
	}, [])
	
	return {ref, show, setShow}
}