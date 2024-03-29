import { TitleDescription } from '@/components/Blocks';
import { LinkHoverBtn } from '@/components/Buttons';
import { ResponsiveTable } from '@/components/Tables';
import { SiteData } from '@/data';
import { useAdminData } from '@/pages/Admin/components';

const RolesPermissions = () => {

	const { modalIDs } = SiteData;
	const { rolesPermissionsTable } = useAdminData()

	return (
		<section>
			<div className="d-flex justify-content-between align-items-start border-b border-gray-200">
				<div className="ps-2 mb-3">
					<TitleDescription
						title="Role Permissions"
						description="Permission rules for each user role."
					/>
				</div>
				<LinkHoverBtn modalID={modalIDs.newUserRole}>
					Add Role
				</LinkHoverBtn>
			</div>
			<ResponsiveTable
				tableContent={rolesPermissionsTable}
        tdClass="py-2 border-bottom-0 ps-3"
				noHover={true}
        type="nested"
			/>
			<hr className="my-5" />
		</section>
	)
}

export default RolesPermissions
