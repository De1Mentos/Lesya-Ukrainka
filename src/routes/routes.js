import Biography from "../features/pages/Biography";
import Hope from "../features/pages/Hope";
import GreenHill from "../features/pages/GreenHill";
import Cherries from "../features/pages/Cherries";
import ListeningToSpring from "../features/pages/ListeningToSpring";
import LastFlowers from "../features/pages/LastFlowers";
import Song from "../features/pages/Song";
import LilyOfTheValley from "../features/pages/LilyOfTheValley";
import EveningHour from "../features/pages/EveningHour";
import SummerHasPassed from "../features/pages/SummerHasPassed";

export const appRoutes =[
    { path: "/", element: <Biography />, i18nKey: "biography", showInMenu: true },
    { path: "/hope", element: <Hope />, i18nKey: "hope", showInMenu: true },
    { path: "/green-hill", element: <GreenHill />, i18nKey: "green_hill", showInMenu: true },
    { path: "/cherries", element: <Cherries />, i18nKey: "cherries", showInMenu: true },
    { path: "/listening-to-spring", element: <ListeningToSpring />, i18nKey: "listening_to_spring", showInMenu: true },
    { path: "/last-flowers", element: <LastFlowers />, i18nKey: "last_flowers", showInMenu: true },
    { path: "/song", element: <Song />, i18nKey: "song", showInMenu: true },
    { path: "/lily", element: <LilyOfTheValley />, i18nKey: "lily_of_the_valley", showInMenu: true },
    { path: "/summer", element: <SummerHasPassed />, i18nKey: "summer_has_passed", showInMenu: true },
    { path: "/evening", element: <EveningHour />, i18nKey: "evening_hour", showInMenu: true }
];