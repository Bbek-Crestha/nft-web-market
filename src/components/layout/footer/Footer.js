import React from "react";
import {
	Box,
	Container,
	Grid,
	IconButton,
	List,
	ListItem,
	TextField,
	Typography,
} from "@mui/material";
import { AiFillFire } from "react-icons/ai";

import { FooterItems, Resources, Company, Social_Medias } from "./FooterData";
import { Link } from "react-router-dom";

const FooterLists = [
	{ array: FooterItems, name: "My Account" },
	{ array: Resources, name: "Resources" },
	{ array: Company, name: "Company" },
];

const Footer = () => {
	return (
		<Container>
			<Grid container spacing={2} sx={{ alignItems: "start" }}>
				<Grid item sm={4}>
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

					<Typography variant="p" sx={{ opacity: "80%", lineHeight: "1.4rem" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis
						eros non sapien rhoncus, non auctor nunc ornare. Suspendisse ipsum
						mi, maximus ac mauris in, iaculis efficitur massa. Suspendisse porta
						eros mi, non posuere augue sagittis commodo.
					</Typography>
				</Grid>

				{FooterLists.map((list) => (
					<Grid item sm={2}>
						<Typography variant="h6">{list.name}</Typography>
						<List>
							{list.array.map((item) => (
								<ListItem
									key={item.id}
									sx={{
										color: "#fff",
										opacity: "80%",
										paddingLeft: "0rem",
										fontWeight: "500",
										"&:hover": {
											color: "#e250e5",
										},
									}}
								>
									<Link to={item.route}>{item.name}</Link>
								</ListItem>
							))}
						</List>
					</Grid>
				))}

				<Grid
					item
					sm={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: ".5rem",
						justifyContent: "start",
					}}
				>
					<Typography variant="h6">Newsletter</Typography>
					<TextField
						label="Email Address"
						variant="outlined"
						size="small"
						InputLabelProps={{
							style: { color: "#fff" },
						}}
						InputProps={{
							style: { color: "#fff" },
						}}
						sx={{
							"& .MuiInputLabel-root": { color: "#fff" },
							"& .MuiOutlinedInput-root": {
								"& > fieldset": {
									borderColor: "#fff",
									borderRadius: "1rem",
								},
							},
							"& .MuiOutlinedInput-root.Mui-focused": {
								"& > fieldset": {
									borderColor: "#5142fc",
								},
							},
							"& .MuiOutlinedInput-root:hover": {
								"& > fieldset": {
									borderColor: "#5142fc",
								},
							},
						}}
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						{Social_Medias.map(({ id, name, icon: Icon, route }) => (
							<IconButton
								sx={{
									padding: "0rem",
									color: "#fff",
									"&:hover": {
										color: "#5142fc",
										transform: "scale(1.2)",
										transition: "all .2s ease-in-out",
									},
								}}
								key={id}
							>
								<Icon />
							</IconButton>
						))}
					</Box>
				</Grid>

				<Grid item sm={12}>
					<Typography
						variant="p"
						component="div"
						sx={{ opacity: "80%", textAlign: "center", paddingTop: "1rem" }}
					>
						Copyrights {new Date().getFullYear()}, Developed by Bibek Shrestha.
						All Rights Reserved.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Footer;
