import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option
} from "@material-tailwind/react";

export function DialogDefault({ open, onClose, title }) {
    const [selectedStream, setSelectedStream] = useState("");
    const [departmentOptions, setDepartmentOptions] = useState([]);

    const stream = ["Regular", "Self"];
    const years = [1, 2, 3];
    const departments = {
        Regular: ["BA", "BSc Physics"],
        Self: ["BSc Computer Science", "BCom"],
    };

    const handleStreamChange = (value) => {
        setSelectedStream(value);
        setDepartmentOptions(departments[value] || []);
    };

    return (
        <Dialog open={open} handler={onClose} size="xs">
            {/* Dynamic Title */}
            <DialogHeader>{title}</DialogHeader>
            <DialogBody>
                <div className="w-full flex flex-col gap-5">
                    {/* Stream Selection */}
                    <Select label="Stream" onChange={(value) => handleStreamChange(value)}>
                        {stream.map((streamItem) => (
                            <Option key={streamItem} value={streamItem}>
                                {streamItem}
                            </Option>
                        ))}
                    </Select>

                    {/* Year Selection */}
                    <Select label="Year">
                        {years.map((year) => (
                            <Option key={year} value={year}>{year}</Option>
                        ))}
                    </Select>

                    {/* Department Selection */}
                    <Select label="Department" disabled={!selectedStream}>
                        {departmentOptions.map((dept) => (
                            <Option key={dept} value={dept}>{dept}</Option>
                        ))}
                    </Select>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" color="red" onClick={onClose} className="mr-1">
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="blue" onClick={onClose}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
