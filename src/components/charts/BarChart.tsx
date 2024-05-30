"use client";

import { convertFriendlyToDate } from "@/lib/convertFriendlyToDate";
import { TMyLog } from "@/types/liftType";
import { format } from "date-fns";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  BarChart as ReChartBarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";

type Props = {};

export const BarChart = ({ data }: { data: TMyLog[] }) => {
  const theme = useTheme();
  const [fill, setFill] = useState("#000");

  useEffect(() => {
    const fill = theme.theme === "light" ? "black" : "white";
    setFill(fill);
  }, [theme]);

  const barChartData = data
    .map((elem: any) => {
      return { date: elem.date, weight: Number(elem.weight) };
    })
    .sort((a, b) => {
      const aDate = Number(convertFriendlyToDate(a.date));
      const bDate = Number(convertFriendlyToDate(b.date));
      return aDate - bDate;
    });

  const formatXAxis = (tickItem: string) => {
    const d = convertFriendlyToDate(tickItem);
    return format(d, "M/d");
  };
  return (
    <ResponsiveContainer width={"100%"} height={234}>
      {barChartData.length < 5 ? (
        <div>You need at least 5 logs for a chart.</div>
      ) : (
        <ReChartBarChart data={barChartData}>
          <XAxis
            dataKey={"date"}
            tickLine={false}
            axisLine={false}
            stroke="#888"
            fontSize={12}
            tickFormatter={formatXAxis}
          />
          <YAxis hide={true} />
          <Bar dataKey={"weight"} radius={[4, 4, 0, 0]} fill={fill} />
        </ReChartBarChart>
      )}
    </ResponsiveContainer>
  );
};
