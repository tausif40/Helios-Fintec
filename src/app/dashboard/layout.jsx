import DashboardLayout from '@/components/Layout/DashboardLayout'
import React from 'react'

function layout({ children }) {
	return (
		<>
			<DashboardLayout children={children} />
		</>
	)
}

export default layout