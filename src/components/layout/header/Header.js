import React from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	List,
	ListItem,
	Typography,
} from "@mui/material";
import { AiFillFire, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

import { Nav_Items } from "./NavItems";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<AppBar position="fixed" sx={{ background: "inherit", height: "4rem" }}>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						padding: ".5rem 0rem",
					}}
				>
					<Typography
						variant="h4"
						component="div"
						sx={{
							display: "flex",
							alignItems: "center",
							fontWeight: "600",
							background:
								"linear-gradient(-45deg, #e250e5, #4b50e6,#e250e5, #4b50e6)",
							backgroundSize: "100% 100%",
							backgroundClip: "text",
							WebkitTextStroke: "3px transparent",
							WebkitTextStrokeFillColor: "#14141f",
						}}
					>
						<AiFillFire style={{ color: "#ff0606" }} />
						NFTs
					</Typography>

					<List sx={{ display: "flex", gap: "1rem" }}>
						{Nav_Items.map((item) => {
							const isActive = window.location.pathname === item.route;
							return (
								<ListItem
									key={item.id}
									sx={{
										color: isActive ? "#e250e5" : "#fff",
										fontWeight: "500",
										"&:hover": {
											color: "#e250e5",
										},
									}}
								>
									<Link to={item.route}>{item.name}</Link>
								</ListItem>
							);
						})}
					</List>

					<Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
						<Button
							sx={{
								color: "#fff",
								border: "1px solid #5142fc",
								borderRadius: "5rem",
								fontSize: ".8rem",
								fontWeight: "600",
								padding: ".5rem 2rem",
								"&:hover": {
									color: "#5142fc",
								},
							}}
						>
							<Link
								to="/wallet"
								style={{
									display: "flex",
									gap: ".5rem",
									alignItems: "center",
								}}
							>
								<MdOutlineAccountBalanceWallet
									style={{ width: "1.5rem", height: "1.5rem" }}
								/>
								Connect Wallet
							</Link>
						</Button>

						<IconButton sx={{ color: "#fff", display: "none" }}>
							<AiOutlineMenu />
						</IconButton>
					</Box>
				</Box>
			</Container>
		</AppBar>
	);
};

export default Header;
