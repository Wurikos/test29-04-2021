import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Hr, Icon, Image, Input, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Section } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				fghxdgrd
			</title>
			<meta name={"description"} content={"dfggdfsgfd"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1619679692237-2c702521a30c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} type={"image/x-icon"} />
			<meta name={"msapplication-TileImage"} content={"https://images.unsplash.com/photo-1619679692237-2c702521a30c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
		</Helmet>
		ad
		<Box />
		<Button>
			Button
		</Button>
		<Hr />
		<Icon category="md" icon={MdFace} />
		<Image width="64px" height="64px" />
		<Input />
		<Link href="#">
			Some text
		</Link>
		<List>
			<Text>
				First item
			</Text>
		</List>
		<Text>
			Some text
		</Text>
		<Components.EmbedHTML />
		<Components.EmbedJS />
		<Components.QuarklycommunityKitSource />
		<Components.QuarklycommunityKitTrack />
		<Components.QuarklycommunityKitGoogleMap />
		<Components.QuarklycommunityKitAnimation />
		<Components.QuarklycommunityKitCarousel />
		<Components.QuarklycommunityKitYoomoneyDonateForm />
		<Components.QuarklycommunityKitBackToTop />
		<Components.QuarklycommunityKitLoopText />
		<Components.QuarklycommunityKitCardFlip />
		<Components.QuarklycommunityKitScrollIndicator />
		<Components.QuarklycommunityKitCounter />
		<Components.QuarklycommunityKitFbComment />
		<Components.QuarklycommunityKitFbLike />
		<Components.QuarklycommunityKitVkComments />
		<Components.QuarklycommunityKitVkPage />
		<Components.QuarklycommunityKitTable />
		<Components.QuarklycommunityKitYouTube />
		<Components.QuarklycommunityKitTable />
		<Components.QuarklycommunityKitLiveChat />
		<Components.QuarklycommunityKitYandexMap />
		<Components.QuarklycommunityKitSvgShape />
		<Components.QuarklycommunityKitSoundCloud />
		<Components.QuarklycommunityKitGallery />
		<Components.QuarklycommunityKitBgImageParallax />
		<Components.QuarklycommunityKitBeforeAfterImage />
		<Components.QuarklycommunityKitTimer />
		<Components.QuarklycommunityKitTooltip />
		<Components.QuarklycommunityKitTimeline />
		<Components.QuarklycommunityKitVideo />
		<Components.QuarklycommunityKitPopup />
		<Components.QuarklycommunityKitCollapse />
		<Components.QuarklycommunityKitVimeo />
		<Components.QuarklycommunityKitDisqus />
		<Components.QuarklycommunityKitDisqusComment />
		<Components.QuarklycommunityKitAudio />
		<Components.QuarklycommunityKitSocialMedia />
		<Components.QuarklycommunityKitSocialMedia />
		<Components.QuarklycommunityKitSocialMedia />
		<Components.Adad background="#581ca1" />
		<Components.Adad />
		<Box />
		<Box />
		<Button>
			Button
		</Button>
		<Button>
			Button
		</Button>
		<Hr />
		<Hr />
		<Icon category="md" icon={MdFace} />
		<Icon category="md" icon={MdFace} />
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Box max-width="240px" padding="50px 80px 80px 50px" background="--color-light" color="--dark">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text
					font="normal 300 50px/1.5 --fontFamily-sansHelvetica"
					display="flex"
					min-height="none"
					letter-spacing="inherit"
					white-space="pre-line"
					text-align="center"
					color="#4385ca"
					margin="16px 0px 50px 0px"
					background="#9e5b5b"
					border-color="#368ee2"
					border-radius="2px"
					position="absolute"
					bottom="226.111px"
					height="353.828px"
					left="1384.445px"
					right="-271.109px"
					top="7826.05px"
					width="100px"
					min-width="100%"
					max-width="100%"
				>
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfHead"} rawKey={"608a9e38b99802509c24f47f"}>
				{"alert(\"привет\")"}
			</script>
		</RawHtml>
	</Theme>;
});