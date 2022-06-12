import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button, Stack, Box } from "@mui/material";
import { RiRocketLine, RiBallPenLine } from "react-icons/ri";

import heroImg from "assets/images/hero.jpg";

const Buttons = [
	{
		id: 1,
		name: "Explore",
		route: "/market",
		icon: RiRocketLine,
	},
	{
		id: 2,
		name: "Create",
		route: "/create",
		icon: RiBallPenLine,
	},
];

const HeroSection = () => {
	return (
		<Container>
			<Grid container sx={{ padding: "1rem 0rem" }}>
				<Grid item sm={6}>
					<Stack spacing={3}>
						<Typography variant="h4" sx={{ fontWeight: "600" }}>
							Discover rare digital art and collect{" "}
							<Typography
								variant="p"
								component="span"
								sx={{
									background:
										"linear-gradient(-45deg, #e250e5, #4b50e6,#e250e5, #4b50e6)",
									backgroundSize: "100% 100%",
									backgroundClip: "text",
									WebkitTextStroke: "3px transparent",
									WebkitTextStrokeFillColor: "#14141f",
								}}
							>
								and sell extraordinary
							</Typography>{" "}
							NFTs
						</Typography>

						<Typography
							variant="p"
							sx={{ opacity: "80%", lineHeight: "1.5rem" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
							iaculis eros non sapien rhoncus, non auctor nunc ornare.
							Suspendisse ipsum mi, maximus ac mauris in, iaculis efficitur
							massa.
						</Typography>

						<Stack direction="row" spacing={3}>
							{Buttons.map(({ id, name, route, icon: Icon }) => (
								<Button
									key={id}
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
										to={route}
										style={{
											display: "flex",
											gap: ".5rem",
											alignItems: "center",
										}}
									>
										<Icon style={{ fontSize: "1.2rem" }} />
										{name}
									</Link>
								</Button>
							))}
						</Stack>
					</Stack>
				</Grid>

				<Grid item sm={6}>
					<Box sx={{ padding: "1rem" }}>
						<img src={heroImg} alt="hero section" style={{ width: "100%" }} />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HeroSection;
