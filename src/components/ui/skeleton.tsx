import type {
  SkeletonProps as ChakraSkeletonProps,
} from "@chakra-ui/react";
import { Skeleton as ChakraSkeleton, Circle, Stack } from "@chakra-ui/react";
import * as React from "react";

export interface SkeletonCircleProps extends ChakraSkeletonProps {
  size?: string; // Assuming size is a string, adjust as needed
}

export const SkeletonCircle = React.forwardRef<HTMLDivElement, SkeletonCircleProps>(
  function SkeletonCircle(props, ref) {
    const { size, ...rest } = props;
    return (
      <Circle size={size} ref={ref}>
        <ChakraSkeleton {...rest} />
      </Circle>
    );
  }
);

export interface SkeletonTextProps extends ChakraSkeletonProps {
  noOfLines?: number;
  gap?: string | number; // Ensure gap is defined
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const { noOfLines = 3, gap = 2, ...rest } = props; // Default gap value
    return (
      <Stack gap={gap} width="full" ref={ref}>
        {Array.from({ length: noOfLines }).map((_, index) => (
          <ChakraSkeleton
            height="4"
            key={index}
            _last={{ maxW: "80%" }}
            {...rest}
          />
        ))}
      </Stack>
    );
  }
);

export const Skeleton = ChakraSkeleton;
