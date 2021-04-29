import React from "react";
import theme from "theme";
import { Theme, Link, Box, Button, Hr, Icon, Image, Input, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index/index1"} />
		<Helmet>
			<title>
				fghxdgrd
			</title>
			<meta name={"description"} content={"asdas"} />
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